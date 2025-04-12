
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      // Check if user was created successfully
      if (data.user) {
        toast({
          title: "Account Created",
          description: "Please check your email to confirm your account.",
        });
        
        // Redirect to dashboard or home page
        navigate('/dashboard');
      }
    } catch (error: any) {
      toast({
        title: "Signup Error",
        description: error.message || "There was a problem creating your account.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create your account</CardTitle>
          <CardDescription className="text-center">
            Join First99K and start your journey to $99K
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>

          <div className="my-4 flex items-center">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="px-2 text-gray-400 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          <div className="space-y-2">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
            >
              Continue with Google
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => supabase.auth.signInWithOAuth({ provider: 'github' })}
            >
              Continue with GitHub
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <p className="text-sm text-gray-500 text-center mt-2">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
          <p className="text-sm text-center mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-purple-600 hover:text-purple-500">
              Log in
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupPage;
