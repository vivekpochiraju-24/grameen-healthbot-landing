import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Thermometer, 
  Activity, 
  Calendar, 
  Phone, 
  Bot, 
  TrendingUp, 
  TrendingDown,
  User,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle,
  BarChart3,
  LineChart,
  PieChart
} from 'lucide-react';

interface DashboardProps {
  user: {
    name: string;
    email: string;
    phone: string;
    village: string;
    joinDate: string;
    avatar: string;
  };
}

const Dashboard = ({ user }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock health data
  const healthVitals = {
    heartRate: { value: 72, unit: 'bpm', status: 'normal', trend: 'up' },
    bloodPressure: { value: '120/80', unit: 'mmHg', status: 'normal', trend: 'stable' },
    temperature: { value: 98.6, unit: '°F', status: 'normal', trend: 'stable' },
    weight: { value: 65, unit: 'kg', status: 'normal', trend: 'down' },
    bloodSugar: { value: 95, unit: 'mg/dL', status: 'normal', trend: 'stable' }
  };

  const recentActivities = [
    {
      date: '2024-01-20',
      type: 'health_check',
      title: 'Health Screening',
      description: 'Complete vital signs check via Village Robot',
      status: 'completed',
      doctor: 'Dr. Priya Sharma'
    },
    {
      date: '2024-01-18',
      type: 'consultation',
      title: 'Telemedicine Call',
      description: 'Follow-up consultation via 1455',
      status: 'completed',
      doctor: 'Dr. Rajesh Gupta'
    },
    {
      date: '2024-01-15',
      type: 'prescription',
      title: 'Medication Refill',
      description: 'Hypertension medication dispensed',
      status: 'completed',
      doctor: 'Dr. Priya Sharma'
    },
    {
      date: '2024-01-12',
      type: 'emergency',
      title: 'Emergency Alert',
      description: 'High fever detected - immediate care provided',
      status: 'resolved',
      doctor: 'Dr. Emergency Team'
    }
  ];

  const appointments = [
    {
      date: '2024-01-25',
      time: '10:00 AM',
      type: 'routine_checkup',
      doctor: 'Dr. Priya Sharma',
      status: 'upcoming'
    },
    {
      date: '2024-01-28',
      time: '2:00 PM', 
      type: 'follow_up',
      doctor: 'Dr. Rajesh Gupta',
      status: 'upcoming'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal': return <CheckCircle className="h-4 w-4 text-secondary" />;
      case 'warning': return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'critical': return <AlertCircle className="h-4 w-4 text-destructive" />;
      default: return <Activity className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-secondary" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-destructive" />;
      default: return <Activity className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 pt-20 pb-8">
      <div className="container mx-auto max-w-7xl px-4">
        {/* User Profile Header */}
        <div className="bg-card rounded-3xl p-6 shadow-xl border border-border/20 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl">
                {user.avatar}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Welcome, {user.name}</h1>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{user.village}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Phone className="h-4 w-4" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Member since {user.joinDate}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Button asChild className="btn-hero">
              <a href="tel:1455" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Emergency: 1455
              </a>
            </Button>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="vitals">Health Vitals</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {Object.entries(healthVitals).map(([key, vital]) => (
                <Card key={key} className="card-feature">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center justify-between">
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      {getStatusIcon(vital.status)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">{vital.value}</div>
                        <div className="text-xs text-muted-foreground">{vital.unit}</div>
                      </div>
                      {getTrendIcon(vital.trend)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5" />
                  <span>Recent Health Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.slice(0, 3).map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-muted/30">
                      <div className="icon-primary flex-shrink-0">
                        {activity.type === 'health_check' && <Bot />}
                        {activity.type === 'consultation' && <Phone />}
                        {activity.type === 'prescription' && <Heart />}
                        {activity.type === 'emergency' && <AlertCircle />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{activity.title}</h4>
                          <Badge variant={activity.status === 'completed' ? 'default' : 'secondary'}>
                            {activity.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                          <span>{activity.date}</span>
                          <span>•</span>
                          <span>{activity.doctor}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Health Vitals Tab */}
          <TabsContent value="vitals" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(healthVitals).map(([key, vital]) => (
                <Card key={key} className="card-feature">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(vital.status)}
                        {getTrendIcon(vital.trend)}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{vital.value} {vital.unit}</div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge variant={vital.status === 'normal' ? 'default' : 'destructive'}>
                        {vital.status.toUpperCase()}
                      </Badge>
                    </div>
                    
                    {/* Mock Chart */}
                    <div className="h-32 bg-muted/30 rounded-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <LineChart className="h-8 w-8 mx-auto mb-2" />
                        <span className="text-sm">7-day trend chart</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>All Health Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl border border-border hover:bg-muted/30 transition-colors">
                      <div className="icon-primary flex-shrink-0">
                        {activity.type === 'health_check' && <Bot />}
                        {activity.type === 'consultation' && <Phone />}
                        {activity.type === 'prescription' && <Heart />}
                        {activity.type === 'emergency' && <AlertCircle />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{activity.title}</h4>
                          <Badge variant={activity.status === 'completed' ? 'default' : 'secondary'}>
                            {activity.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-2">{activity.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{activity.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{activity.doctor}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.map((appointment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-border">
                      <div className="flex items-start space-x-4">
                        <div className="icon-secondary">
                          <Calendar />
                        </div>
                        <div>
                          <h4 className="font-semibold capitalize">{appointment.type.replace('_', ' ')}</h4>
                          <p className="text-muted-foreground">{appointment.doctor}</p>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                            <span>{appointment.date}</span>
                            <span>•</span>
                            <span>{appointment.time}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary">{appointment.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Monthly Report</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-muted/30 rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                      <span>Health trends chart</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PieChart className="h-5 w-5" />
                    <span>Health Score</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">85/100</div>
                    <div className="text-muted-foreground">Overall Health Score</div>
                    <div className="h-20 bg-muted/30 rounded-lg mt-4 flex items-center justify-center">
                      <PieChart className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5" />
                    <span>Activity Summary</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Health Checks</span>
                      <span className="font-semibold">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Consultations</span>
                      <span className="font-semibold">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Prescriptions</span>
                      <span className="font-semibold">5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Emergencies</span>
                      <span className="font-semibold">1</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;