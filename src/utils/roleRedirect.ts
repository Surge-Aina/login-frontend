/**
 * Function: getDashboardPath
 * Parameters:
 * role (string): The user's role (e.g., 'Admin', 'Worker', 'Customer', 'Manager').
 * Returns:
 * string: The URL path to the corresponding dashboard.
 * Description:
 * Takes a user role as input and returns the appropriate dashboard path.
 * If the role is not recognized, it redirects to the login page.
 */
export function getDashboardPath(role: string): string {
  switch (role) {
    case 'Admin':
      return '/dashboard/admin';
    case 'Worker':
      return '/dashboard/worker';
    case 'Customer':
      return '/dashboard/customer';
    case "Manager":
        return '/dashboard/manager';
    default:
      return '/login'; // Redirect to login if role is unknown
  }
}