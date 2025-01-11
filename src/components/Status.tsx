type Status = {
  status: 'loading' | 'success' | 'error';
};

function Status({ status }: Status) {
  let message;
  if (status === 'loading') message = 'loading...';
  else if (status === 'success') message = 'Data fetched successfully';
  else if (status === 'error') message = 'Error fetching data';

  return (
    <div>
      <h3>Status - {message}</h3>
    </div>
  );
}

export default Status;
