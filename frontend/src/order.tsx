"use client"

import { useState } from "react"
import Button from "./components/button"
import { Input } from "./components/input"
import { Label } from "./components/label"
import { Select } from "./components/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./components/dialog"

interface OrderDetails {
  vegetables: Array<{ name: string; quantity: number }>
  economicCenter: string
  shop: string
  address: string
  contact: string
}

export default function VegetablePurchase() {
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    vegetables: [],
    economicCenter: "",
    shop: "",
    address: "",
    contact: "",
  })
  const [selectedVeg, setSelectedVeg] = useState("")
  const [quantity, setQuantity] = useState("")
  const [showReview, setShowReview] = useState(false)

  const handleAddVegetable = () => {
    if (selectedVeg && quantity && orderDetails.vegetables.length < 5) {
      setOrderDetails((prev) => ({
        ...prev,
        vegetables: [...prev.vegetables, { name: selectedVeg, quantity: Number(quantity) }],
      }))
      setSelectedVeg("")
      setQuantity("")
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-4">Vegetable Purchase</h1>
        <p className="text-sm text-muted-foreground mb-4">Select Vegetable (Max 5)</p>

        <div className="flex gap-4 mb-6">
          <Select
            value={selectedVeg}
            onChange={(e) => setSelectedVeg(e.target.value)} // Corrected usage
            options={[
              { value: "tomato", label: "Tomato" },
              { value: "potato", label: "Potato" },
              { value: "carrot", label: "Carrot" },
              { value: "onion", label: "Onion" },
            ]}
          />

          <Input
            type="number"
            placeholder="Quantity(kg)"
            className="w-[150px]"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Button onClick={handleAddVegetable}>ADD</Button>
        </div>

        {orderDetails.vegetables.length > 0 && (
          <div className="mb-6">
            <h3 className="font-medium mb-2">Selected Vegetables:</h3>
            <ul className="space-y-1">
              {orderDetails.vegetables.map((veg, index) => (
                <li key={index} className="text-sm">
                  {veg.name} - {veg.quantity}kg
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold">Order Details</h2>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="economic-center">Economic Center</Label>
            <Select
              value={orderDetails.economicCenter}
              options={[
                { value: "center1", label: "Economic Center 1" },
                { value: "center2", label: "Economic Center 2" },
                { value: "center3", label: "Economic Center 3" },
              ]}
              onValueChange={(value) => setOrderDetails((prev) => ({ ...prev, economicCenter: value }))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="shop">Vegetable Shop</Label>
            <Select
              value={orderDetails.shop}
              options={[
                { value: "shop1", label: "Shop 1" },
                { value: "shop2", label: "Shop 2" },
                { value: "shop3", label: "Shop 3" },
              ]}
              onValueChange={(value) => setOrderDetails((prev) => ({ ...prev, shop: value }))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Delivery Address</Label>
            <Input
              id="address"
              placeholder="Enter Your Delivery Address"
              value={orderDetails.address}
              onChange={(e) => setOrderDetails((prev) => ({ ...prev, address: e.target.value }))} 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Contact Number</Label>
            <Input
              id="contact"
              placeholder="Enter Your Number"
              value={orderDetails.contact}
              onChange={(e) => setOrderDetails((prev) => ({ ...prev, contact: e.target.value }))} 
            />
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Button variant="outline" onClick={() => setShowReview(true)}>
            Review Order
          </Button>
          <Button>Confirm Order</Button>
        </div>
      </div>

      <Dialog open={showReview} onOpenChange={setShowReview}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Order Review</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Selected Vegetables:</h3>
              <ul className="list-disc pl-4 space-y-1">
                {orderDetails.vegetables.map((veg, index) => (
                  <li key={index}>
                    {veg.name} - {veg.quantity}kg
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Economic Center:</span> {orderDetails.economicCenter}
              </p>
              <p>
                <span className="font-medium">Shop:</span> {orderDetails.shop}
              </p>
              <p>
                <span className="font-medium">Delivery Address:</span> {orderDetails.address}
              </p>
              <p>
                <span className="font-medium">Contact Number:</span> {orderDetails.contact}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
