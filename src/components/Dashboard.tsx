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
import {
  LineChart as RechartsLine,
  Line,
  BarChart,
  Bar,
  PieChart as RechartsPie,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

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

  // Mock health data with historical data for charts
  const healthVitals = {
    heartRate: { 
      value: 72, 
      unit: 'bpm', 
      status: 'normal', 
      trend: 'up',
      history: [
        { date: 'Mon', value: 75 },
        { date: 'Tue', value: 73 },
        { date: 'Wed', value: 71 },
        { date: 'Thu', value: 70 },
        { date: 'Fri', value: 72 },
        { date: 'Sat', value: 73 },
        { date: 'Sun', value: 72 }
      ]
    },
    bloodPressure: { 
      value: '120/80', 
      unit: 'mmHg', 
      status: 'normal', 
      trend: 'stable',
      history: [
        { date: 'Mon', value: 122 },
        { date: 'Tue', value: 120 },
        { date: 'Wed', value: 121 },
        { date: 'Thu', value: 119 },
        { date: 'Fri', value: 120 },
        { date: 'Sat', value: 118 },
        { date: 'Sun', value: 120 }
      ]
    },
    temperature: { 
      value: 98.6, 
      unit: '°F', 
      status: 'normal', 
      trend: 'stable',
      history: [
        { date: 'Mon', value: 98.4 },
        { date: 'Tue', value: 98.6 },
        { date: 'Wed', value: 98.5 },
        { date: 'Thu', value: 98.7 },
        { date: 'Fri', value: 98.6 },
        { date: 'Sat', value: 98.5 },
        { date: 'Sun', value: 98.6 }
      ]
    },
    weight: { 
      value: 65, 
      unit: 'kg', 
      status: 'normal', 
      trend: 'down',
      history: [
        { date: 'Mon', value: 65.5 },
        { date: 'Tue', value: 65.3 },
        { date: 'Wed', value: 65.1 },
        { date: 'Thu', value: 65.0 },
        { date: 'Fri', value: 64.9 },
        { date: 'Sat', value: 65.0 },
        { date: 'Sun', value: 65.0 }
      ]
    },
    bloodSugar: { 
      value: 95, 
      unit: 'mg/dL', 
      status: 'normal', 
      trend: 'stable',
      history: [
        { date: 'Mon', value: 96 },
        { date: 'Tue', value: 94 },
        { date: 'Wed', value: 95 },
        { date: 'Thu', value: 97 },
        { date: 'Fri', value: 95 },
        { date: 'Sat', value: 94 },
        { date: 'Sun', value: 95 }
      ]
    }
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
                    
                    {/* Interactive Chart */}
                    <div className="h-32 w-full mt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsLine data={vital.history} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                          <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#3b82f6" 
                            strokeWidth={2} 
                            dot={false} 
                            activeDot={{ r: 4 }}
                          />
                          <XAxis 
                            dataKey="date" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fontSize: 10 }}
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'hsl(var(--card))',
                              borderColor: 'hsl(var(--border))',
                              borderRadius: '0.5rem',
                              fontSize: '0.75rem'
                            }}
                          />
                        </RechartsLine>
                      </ResponsiveContainer>
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
                  <div className="h-40 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={[
                        { name: 'Heart', value: 72, fill: '#3b82f6' },
                        { name: 'BP', value: 120, fill: '#10b981' },
                        { name: 'Temp', value: 98.6, fill: '#f59e0b' },
                        { name: 'Weight', value: 65, fill: '#8b5cf6' },
                        { name: 'Glucose', value: 95, fill: '#ec4899' }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'hsl(var(--card))',
                            borderColor: 'hsl(var(--border))',
                            borderRadius: '0.5rem'
                          }}
                        />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                          {[
                            { name: 'Heart', value: 72, fill: '#3b82f6' },
                            { name: 'BP', value: 120, fill: '#10b981' },
                            { name: 'Temp', value: 98.6, fill: '#f59e0b' },
                            { name: 'Weight', value: 65, fill: '#8b5cf6' },
                            { name: 'Glucose', value: 95, fill: '#ec4899' }
                          ].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
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
                    <div className="text-muted-foreground mb-4">Overall Health Score</div>
                    <div className="h-40 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPie>
                          <Pie
                            data={[
                              { name: 'Score', value: 85, color: '#3b82f6' },
                              { name: 'Remaining', value: 15, color: 'hsl(var(--muted))' }
                            ]}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={60}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {[
                              { name: 'Score', value: 85, color: '#3b82f6' },
                              { name: 'Remaining', value: 15, color: 'hsl(var(--muted))' }
                            ].map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'hsl(var(--card))',
                              borderColor: 'hsl(var(--border))',
                              borderRadius: '0.5rem'
                            }}
                          />
                        </RechartsPie>
                      </ResponsiveContainer>
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