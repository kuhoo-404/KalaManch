import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Filter, Grid, List } from "lucide-react"
import { Input } from "@/components/ui/input"

// Mock data for demonstration
const mockProducts = [
  {
    id: 1,
    name: "Handwoven Warli Art Wall Hanging",
    category: "Warli Painting",
    price: "₹2,500 - ₹3,500",
    image: "/warli-painting-wall-hanging.jpg",
    materials: ["Cotton", "Natural Dyes"],
    status: "Active",
    views: 245,
    likes: 18,
  },
  {
    id: 2,
    name: "Traditional Pottery Vase Set",
    category: "Pottery & Ceramics",
    price: "₹1,200 - ₹1,800",
    image: "/traditional-pottery-vase.jpg",
    materials: ["Clay", "Natural Glaze"],
    status: "Draft",
    views: 89,
    likes: 7,
  },
  {
    id: 3,
    name: "Embroidered Silk Cushion Cover",
    category: "Embroidery",
    price: "₹800 - ₹1,200",
    image: "/embroidered-silk-cushion.jpg",
    materials: ["Silk", "Cotton Thread"],
    status: "Active",
    views: 156,
    likes: 23,
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Your Products</h1>
            <p className="text-muted-foreground">Manage and showcase your beautiful crafts</p>
          </div>
          <Button asChild className="mt-4 md:mt-0">
            <a href="/products/add">
              <Plus className="w-4 h-4 mr-2" />
              Add New Product
            </a>
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search your products..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <div className="flex border rounded-lg">
            <Button variant="ghost" size="sm" className="rounded-r-none">
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-l-none">
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <Badge
                  className="absolute top-2 right-2"
                  variant={product.status === "Active" ? "default" : "secondary"}
                >
                  {product.status}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                <CardDescription>
                  <Badge variant="outline" className="mb-2">
                    {product.category}
                  </Badge>
                  <div className="text-sm text-muted-foreground">Materials: {product.materials.join(", ")}</div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-primary">{product.price}</span>
                  <div className="flex space-x-4 text-sm text-muted-foreground">
                    <span>{product.views} views</span>
                    <span>{product.likes} likes</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    Edit
                  </Button>
                  <Button size="sm" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State (if no products) */}
        {mockProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Plus className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No products yet</h3>
            <p className="text-muted-foreground mb-6">
              Start by adding your first craft to showcase your beautiful work
            </p>
            <Button asChild>
              <a href="/products/add">
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Product
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
