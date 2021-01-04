export const status = {
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

const useFetch = async (asyncFunction) => {
  const result = {
    data: {},
    meta: {},
  };

  try {
    const response = await asyncFunction();
    result.meta.statusCode = response.status;

    if (!response.ok) {
      throw new Error();
    }

    result.meta = {
      ...result.meta,
      ok: true,
      status: status.SUCCESS,
    };
    result.data = await response.json();
  } catch (err) {
    result.data = {};

    result.meta = {
      ...result.meta,
      ok: false,
      status: status.FAILURE,
      error: err,
    };
  }

  return result;
};

export default useFetch;
