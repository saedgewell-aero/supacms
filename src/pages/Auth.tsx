import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth as SupabaseAuth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/dashboard");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="glass-card max-w-md w-full space-y-8 p-8 rounded-xl animate-fade-up">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
            ようこそ
          </h2>
        </div>
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="signin">ログイン</TabsTrigger>
            <TabsTrigger value="signup">新規登録</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <SupabaseAuth 
              supabaseClient={supabase}
              view="sign_in"
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#14b8a6',
                      brandAccent: '#0d9488',
                    }
                  }
                }
              }}
              providers={["google"]}
              redirectTo={`${window.location.origin}/dashboard`}
            />
          </TabsContent>
          <TabsContent value="signup">
            <SupabaseAuth 
              supabaseClient={supabase}
              view="sign_up"
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#14b8a6',
                      brandAccent: '#0d9488',
                    }
                  }
                }
              }}
              providers={["google"]}
              redirectTo={`${window.location.origin}/dashboard`}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;