import Button from "./button"
import Card from "./card"
import { Thermometer, Droplets, Wind, Car, MapPin, Phone, Mail, HelpCircle } from "lucide-react"
import dynamic from "next/dynamic"

// Import Map component dynamically to avoid SSR issues
const Map = dynamic(() => import("./map"), { ssr: false })

export default function ContainerDashboard() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-green-500 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">GreenLink</h1>
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-100">
              Catalog
            </a>
            <a href="#" className="hover:text-green-100">
              My Containers
            </a>
            <a href="#" className="hover:text-green-100">
              Profile
            </a>
            <a href="#" className="hover:text-green-100">
              Support
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Smart Container Catalog */}
        <section>
          <h2 className="text-xl font-bold mb-4">Smart Container Catalog</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{ type: "Small Container", capacity: "500KG" }, { type: "Medium Container", capacity: "1000KG" }, { type: "Large Container", capacity: "2000KG" }].map((container) => (
              <Card key={container.type} className="p-6">
                <h3 className="font-bold">{container.type}</h3>
                <p className="text-sm text-gray-600">Capacity: {container.capacity}</p>
                <Button className="mt-4 bg-black hover:bg-gray-800">Purchase</Button>
              </Card>
            ))}
          </div>
        </section>

        {/* My Containers */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">My Containers</h2>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">456 × 171</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((num) => (
              <Card key={num} className="p-6">
                <h3 className="font-bold mb-4">Container {num}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-4 h-4" />
                      <span>Temperature: 4°C</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4" />
                      <span>Vehicle: WP CAB-1234</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-4 h-4" />
                      <span>Humidity: 85%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Location: Colombo</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4" />
                    <span>Ventilation: Normal</span>
                  </div>

                  <Button className="w-full bg-black hover:bg-gray-800">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Driver: +94 71 234 5678
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Map */}
        <section className="h-[400px] rounded-lg overflow-hidden border">
          <Map />
        </section>

        {/* Support & Assistance */}
        <section>
          <h2 className="text-xl font-bold mb-4">Support & Assistance</h2>
          <div className="grid md:grid-cols-3 gap-6">
  <Button className="flex items-center gap-2 text-black border border-black">
    <Mail className="w-4 h-4" />
    Email Support
  </Button>
  <Button className="flex items-center gap-2 text-black border border-black">
    <Phone className="w-4 h-4" />
    Call Support
  </Button>
  <Button className="flex items-center gap-2 text-black border border-black">
    <HelpCircle className="w-4 h-4" />
    View FAQs
  </Button>
</div>



        </section>
      </main>
    </div>
  )
}
