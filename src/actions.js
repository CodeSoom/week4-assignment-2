// action creator
export function updateList(title) {
  return {
    type: 'updateList',
    payload: {
      title,
    },
  };
}

export function addList() {
  return {
    type: 'addList',
  };
}
