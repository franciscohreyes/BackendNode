const statusMessages = {
  '200': 'Done',
  '201': 'Created',
  '400': 'Invalid format',
  '500': 'Internal Error'
};

exports.success = function(req, res, message, status){
  let statusCode    = status;
  let statusMessage = message;

  if(!status){
    status = 200;
  }

  if(!message){
    statusMessage = statusMessages[status];
  }

  res.status(statusCode || 200).send({
    error: '',
    body: statusMessage
  });
}

exports.error = function(req, res, message, status, details){
  let statusCode    = status;
  let statusMessage = message;

  if(!status){
    status = 200;
  }

  if(!message){
    statusMessage = statusMessages[status];
  }

  res.status(statusCode || 500).send({
    error: statusMessage,
    body: ''
  });
}