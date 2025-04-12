
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircleIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon,
  FireIcon
} from '@heroicons/react/24/outline';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Reach your first</span>{' '}
                  <span className="block gradient-text xl:inline">$99K</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  The accountability app for indie founders. Track your progress, check in weekly, and stay motivated with other founders on the same journey.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Button asChild className="w-full py-6 bg-purple-600 hover:bg-purple-700">
                      <Link to="/signup" className="flex items-center justify-center text-base font-medium">
                        Start Your Journey
                      </Link>
                    </Button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button asChild variant="outline" className="w-full py-6">
                      <Link to="/leaderboard" className="flex items-center justify-center text-base font-medium">
                        View Leaderboard
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-r from-purple-400 to-purple-600 sm:h-72 lg:h-full"></div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">How it works</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Your Path to $99K in Revenue or Users
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              First99K helps indie founders stay focused, accountable, and track progress toward their revenue or user goals.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <FeatureCard
                icon={<CheckCircleIcon className="h-6 w-6 text-purple-600" />}
                title="Weekly Check-ins"
                description="Post updates and track your progress each week. Connect with other founders and get feedback."
              />
              <FeatureCard
                icon={<FireIcon className="h-6 w-6 text-purple-600" />}
                title="Building Streaks"
                description="Maintain consistency with weekly streaks. Earn badges for milestones (3, 5, 10 weeks)."
              />
              <FeatureCard
                icon={<UserGroupIcon className="h-6 w-6 text-purple-600" />}
                title="Accountability Community"
                description="Join a community of founders who are all working toward their first $99K in revenue or users."
              />
              <FeatureCard
                icon={<CurrencyDollarIcon className="h-6 w-6 text-purple-600" />}
                title="Micro-penalties"
                description="Stay motivated with small penalties ($1-$5) if you miss a weekly check-in. Use skip tokens as needed."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-purple-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your journey?</span>
            <span className="block text-purple-200">Join other founders today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button asChild className="bg-white text-purple-700 hover:bg-gray-100 hover:text-purple-800">
                <Link to="/signup" className="py-6 px-6">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-white">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default LandingPage;
