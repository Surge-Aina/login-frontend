import LoginForm from '@/components/LoginForm';

/**
 * Component: LoginPage
 * Description:
 * - Renders the login form centered vertically and horizontally on the screen.
 * - Uses Tailwind CSS to style the layout with a gray background.
 */
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm />
    </div>
  );
}
