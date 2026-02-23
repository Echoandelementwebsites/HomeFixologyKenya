import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-light p-4">
      <Card className="w-full max-w-md shadow-lg border-t-4 border-primary">
        <CardContent className="pt-8 pb-8 px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <AlertTriangle className="h-12 w-12 text-red-500" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-neutral-dark mb-4">
            Page Not Found
          </h1>

          <p className="text-neutral-medium mb-8 leading-relaxed">
            The page you are looking for has been moved or no longer exists.
            Please check the URL or return to our homepage.
          </p>

          <div className="flex flex-col gap-3">
            <Link href="/">
              <Button className="w-full bg-primary hover:bg-blue-700 text-white py-6 text-lg font-medium transition-all duration-200 flex items-center justify-center gap-2">
                <Home size={20} />
                Return to Home
              </Button>
            </Link>

            <Button
              variant="outline"
              className="w-full border-neutral-300 text-neutral-600 hover:bg-neutral-100 py-6 text-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={20} />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center text-neutral-medium text-sm">
        <p>Need immediate assistance?</p>
        <a href="tel:+254768028298" className="text-primary font-semibold hover:underline mt-1 inline-block">
          Call +254 768 028 298
        </a>
      </div>
    </div>
  );
}
