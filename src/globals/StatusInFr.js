function statusInFrench(status) {
  switch (status) {
    case 'active':
      return 'actif';
    case 'started':
      return 'commencé';
    case 'completed':
      return 'Completé';
    case 'accepted':
      return 'Confirmée';
    case 'rejected':
      return 'Annulé';
    default:
      return 'Invité, non confirmé';
  }
}

export default statusInFrench;
