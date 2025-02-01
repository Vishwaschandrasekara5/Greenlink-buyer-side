"use client";  // Ensure this is at the very top for client-side rendering


import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Button from "./button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";
import { ScrollArea } from "./scrollarea";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Thermometer, Droplets, Wind, Phone, Truck, MapPin } from "lucide-react";

// Sample data - In a real app, this would come from an API
const containers = [
  {
    id: "Container 1",
    temperature: 4,
    humidity: 85,
    ventilation: "Normal",
    driver: {
      name: "John Smith",
      phone: "+94 71 234 5678",
    },
    vehicle: "WP CAB-1234",
    location: "Colombo",
    metrics: {
      temperature: Array.from({ length: 24 }, () => Math.floor(Math.random() * 3) + 3),
      humidity: Array.from({ length: 24 }, () => Math.floor(Math.random() * 10) + 80),
      ventilation: Array.from({ length: 24 }, () => Math.floor(Math.random() * 20) + 90),
    },
  },
  {
    id: "Container 2",
    temperature: 5,
    humidity: 82,
    ventilation: "Normal",
    driver: {
      name: "David Kumar",
      phone: "+94 71 234 5679",
    },
    vehicle: "WP CAB-5678",
    location: "Kandy",
    metrics: {
      temperature: Array.from({ length: 24 }, () => Math.floor(Math.random() * 3) + 4),
      humidity: Array.from({ length: 24 }, () => Math.floor(Math.random() * 10) + 75),
      ventilation: Array.from({ length: 24 }, () => Math.floor(Math.random() * 20) + 90),
    },
  },
];

export default function ContainerDashboard() {
  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">My Containers</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {containers.map((container) => (
          <Sheet key={container.id}>
            <SheetTrigger>
              <Card className="hover:bg-muted/50 cursor-pointer transition-colors">
                <CardHeader>
                  <CardTitle>{container.id}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Thermometer className="h-4 w-4 text-red-500" />
                        <span>Temperature: {container.temperature}°C</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Droplets className="h-4 w-4 text-blue-500" />
                        <span>Humidity: {container.humidity}%</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wind className="h-4 w-4 text-green-500" />
                      <span>Ventilation: {container.ventilation}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      <span>Vehicle: {container.vehicle}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Location: {container.location}</span>
                    </div>
                    <Button
                      className="w-full"
                      onClick={() => {
                        // Manually handle the event logic
                        window.location.href = `tel:${container.driver.phone}`;
                      }}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Driver: {container.driver.phone}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-[600px]">
              <SheetHeader>
                <SheetTitle>{container.id} - Detailed View</SheetTitle>
                <SheetDescription>Environmental metrics and tracking information</SheetDescription>
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
                <div className="space-y-6 py-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Temperature (°C)</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={container.metrics.temperature.map((value, index) => ({ hour: index, value }))}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="hour" />
                          <YAxis domain={[0, 10]} />
                          <Tooltip />
                          <Line type="monotone" dataKey="value" stroke="#ef4444" />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Humidity (%)</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={container.metrics.humidity.map((value, index) => ({ hour: index, value }))}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="hour" />
                          <YAxis domain={[50, 100]} />
                          <Tooltip />
                          <Line type="monotone" dataKey="value" stroke="#3b82f6" />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Ventilation (%)</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={container.metrics.ventilation.map((value, index) => ({ hour: index, value }))}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="hour" />
                          <YAxis domain={[50, 100]} />
                          <Tooltip />
                          <Line type="monotone" dataKey="value" stroke="#22c55e" />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Driver & Vehicle Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-2">
                        <div className="font-semibold">Driver</div>
                        <div>{container.driver.name}</div>
                        <Button
                          variant="outline"
                          className="w-fit"
                          onClick={() => (window.location.href = `tel:${container.driver.phone}`)}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          {container.driver.phone}
                        </Button>
                      </div>
                      <div className="grid gap-2">
                        <div className="font-semibold">Vehicle</div>
                        <div className="flex items-center gap-2">
                          <Truck className="h-4 w-4" />
                          {container.vehicle}
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <div className="font-semibold">Current Location</div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {container.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </div>
  );
}
