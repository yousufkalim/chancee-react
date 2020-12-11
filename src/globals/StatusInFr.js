function statusInFrench(status) {
  switch (status) {
    case 'active':
      return 'Actif';
    case 'started':
      return 'Commencé';
    case 'completed':
      return 'Completé';
    case 'accepted':
      return 'Confirmée';
    case 'rejected':
      return 'Annulé';
    case 'pendinguser':
      return 'Confirmé';
    default:
      return 'Invité, non confirmé';
  }
}

export default statusInFrench;
