
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChevronRight, Star, Zap, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPreview = () => {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for individuals and small teams",
      features: ["Up to 5 projects", "10GB storage", "Basic analytics", "Email support"],
      popular: false,
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$29",
      description: "Advanced features for growing teams",
      features: ["Unlimited projects", "100GB storage", "Advanced analytics", "Priority support", "Custom integrations"],
      popular: true,
      icon: Star,
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: ["Unlimited everything", "Custom storage", "White-label options", "Dedicated support", "SLA guarantee"],
      popular: false,
      icon: Crown,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium tech-border text-indigo-300 mb-6">
            <Star className="w-4 h-4 mr-2" />
            PRICING
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Simple, transparent</span>
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mt-2">
              pricing
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Start free, scale as you grow. No hidden fees, no surprises. Choose the plan that fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative tech-border hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl group animate-slide-up ${
                plan.popular ? 'border-indigo-500/50 shadow-indigo-500/10 shadow-2xl scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4 relative">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plan.gradient} mb-4 flex items-center justify-center shadow-lg`}>
                  <plan.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-zinc-400 ml-2">/month</span>}
                </div>
                <p className="text-zinc-400">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mr-3 flex-shrink-0`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full h-12 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/25' 
                      : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 hover:border-indigo-500'
                  } transition-all duration-300 group-hover:scale-105`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
              
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Link to="/pricing">
            <Button variant="outline" size="lg" className="group tech-border text-zinc-200 hover:bg-zinc-800 hover:border-indigo-500 px-8 py-3">
              View all features
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
