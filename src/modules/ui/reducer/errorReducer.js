const errorReducer = (state = {}, { type, payload }) => {
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

  // not a *_REQUEST / *_FAILURE actions, so we ignore them
  if (!matches) return state;
  console.log({ payload });
  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'FAILURE' ? payload.message : '',
  };
};

export default errorReducer;
