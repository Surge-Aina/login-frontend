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