
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/catalyst_ui/button";
import { Input, InputGroup } from "@/components/catalyst_ui/input";
import { Text, TextLink } from "@/components/catalyst_ui/text";
import { Divider } from "@/components/catalyst_ui/divider";
import { AuthLayout } from "@/components/catalyst_ui/auth-layout";

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
    <AuthLayout>
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2">Create your account</h1>
          <Text>Join First99K and start your journey to $99K</Text>
        </div>
        
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-zinc-950 dark:text-white">
              Email
            </label>
            <InputGroup>
              <Mail data-slot="icon" className="text-zinc-500 dark:text-zinc-400" />
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-zinc-950 dark:text-white">
              Password
            </label>
            <InputGroup>
              <Lock data-slot="icon" className="text-zinc-500 dark:text-zinc-400" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 dark:text-zinc-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </InputGroup>
          </div>
          
          <Button type="submit" className="w-full" color="purple" disabled={loading}>
            {loading ? "Creating Account..." : "Sign Up"}
          </Button>
        </form>

        <div className="my-4 flex items-center">
          <Divider className="flex-grow" />
          <span className="px-2 text-zinc-500 text-sm">OR</span>
          <Divider className="flex-grow" />
        </div>

        <div className="space-y-2">
          <Button 
            className="w-full" 
            outline
            onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
          >
            Continue with Google
          </Button>
          <Button 
            className="w-full" 
            outline
            onClick={() => supabase.auth.signInWithOAuth({ provider: 'github' })}
          >
            Continue with GitHub
          </Button>
        </div>
        
        <div className="mt-6 text-center">
          <Text>
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </Text>
          <Text className="mt-4">
            Already have an account?{' '}
            <TextLink to="/login">
              Log in
            </TextLink>
          </Text>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignupPage;
