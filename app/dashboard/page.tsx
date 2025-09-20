import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import {
  Plus,
  Eye,
  Heart,
  Share2,
  Palette,
  ArrowRight,
  BarChart3,
  Globe,
  TrendingUp,
  Calendar,
  Target,
  Award,
  Users,
  ShoppingBag,
  Sparkles,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Priya!</h1>
              <p className="text-muted-foreground">Here's how your crafts are performing today</p>
            </div>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Badge variant="secondary" className="text-xs">
                <Calendar className="w-3 h-3 mr-1" />
                Last updated: Today
              </Badge>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Palette className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">12</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +2 from last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">1,234</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +15% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">89</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +8 this week
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reach</CardTitle>
              <Share2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">456</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +23 this week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Get started with your most common tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button asChild className="h-auto p-4 justify-start">
                    <a href="/products/add" className="flex flex-col items-start space-y-2">
                      <div className="flex items-center space-x-2">
                        <Plus className="w-5 h-5" />
                        <span className="font-semibold">Add New Product</span>
                      </div>
                      <span className="text-xs text-primary-foreground/80">Share another beautiful craft</span>
                    </a>
                  </Button>

                  <Button variant="outline" asChild className="h-auto p-4 justify-start bg-transparent">
                    <a href="/products/generate" className="flex flex-col items-start space-y-2">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-5 h-5" />
                        <span className="font-semibold">Generate AI Content</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Create marketing materials</span>
                    </a>
                  </Button>

                  <Button variant="outline" asChild className="h-auto p-4 justify-start bg-transparent">
                    <a href="/analytics" className="flex flex-col items-start space-y-2">
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="w-5 h-5" />
                        <span className="font-semibold">View Analytics</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Track your performance</span>
                    </a>
                  </Button>

                  <Button variant="outline" asChild className="h-auto p-4 justify-start bg-transparent">
                    <a href="/trends" className="flex flex-col items-start space-y-2">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-5 h-5" />
                        <span className="font-semibold">Market Trends</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Discover opportunities</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest updates and achievements</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      icon: Award,
                      title: "Product Featured",
                      description: "Your Warli Art Wall Hanging was featured in the trending section",
                      time: "2 hours ago",
                      color: "text-primary",
                    },
                    {
                      icon: Users,
                      title: "New Followers",
                      description: "5 new people started following your craft journey",
                      time: "4 hours ago",
                      color: "text-accent",
                    },
                    {
                      icon: ShoppingBag,
                      title: "Inquiry Received",
                      description: "Someone inquired about your pottery vase set",
                      time: "1 day ago",
                      color: "text-primary",
                    },
                    {
                      icon: Sparkles,
                      title: "AI Content Generated",
                      description: "New marketing content created for 3 products",
                      time: "2 days ago",
                      color: "text-accent",
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div
                        className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center ${activity.color}`}
                      >
                        <activity.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Performance Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">This Month</CardTitle>
                <CardDescription>Your craft performance summary</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Profile Views</span>
                  <span className="font-semibold">2,341</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Product Likes</span>
                  <span className="font-semibold">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Shares</span>
                  <span className="font-semibold">43</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Inquiries</span>
                  <span className="font-semibold">12</span>
                </div>
              </CardContent>
            </Card>

            {/* Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Monthly Goals</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Products Added</span>
                    <span>2/5</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "40%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Profile Views</span>
                    <span>2,341/3,000</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: "78%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Engagement Rate</span>
                    <span>7.2%/10%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "72%" }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Today's Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Use Natural Lighting</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Photos taken in natural light get 40% more engagement. Try photographing your crafts near a window
                      during golden hour.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Products */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Your Recent Products</CardTitle>
                <CardDescription>Latest additions to your craft collection</CardDescription>
              </div>
              <Button variant="outline" asChild>
                <a href="/products">
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Handwoven Warli Art Wall Hanging",
                  category: "Warli Painting",
                  status: "Active",
                  views: 245,
                  likes: 18,
                  image: "/warli-painting-wall-hanging.jpg",
                },
                {
                  name: "Traditional Pottery Vase Set",
                  category: "Pottery & Ceramics",
                  status: "Draft",
                  views: 89,
                  likes: 7,
                  image: "/traditional-pottery-vase.jpg",
                },
                {
                  name: "Embroidered Silk Cushion Cover",
                  category: "Embroidery",
                  status: "Active",
                  views: 156,
                  likes: 23,
                  image: "/embroidered-silk-cushion.jpg",
                },
              ].map((product, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base line-clamp-2">{product.name}</CardTitle>
                    <CardDescription>
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{product.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{product.likes}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
