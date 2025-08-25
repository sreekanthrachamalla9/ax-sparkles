
export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'applied': return '#0d6efd';
    case 'shortlisted': return '#198754';
    case 'interview': return '#fd7e14';
    case 'rejected': return '#dc3545';
    default: return '#6c757d';
  }
}

// Utility to format applied date
export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}
