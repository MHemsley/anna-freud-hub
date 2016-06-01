exports.register = (server, options, next) => {

  const client = server.app.client
  const events = server.app.events
  const nhs = server.app.nhs

  server.route([ {
    path: '/editevent/{eventId}',
    method: 'GET',
    config: {
      description: 'nhs wants to edit an existing event',
      auth: 'nhs',
      handler: (request, reply) => {
        events.getEvent(client, request.params.eventId)
          .then(data => reply.view('editEvent', { event: data }))
      }
    }
  } ])

  return next()
}

exports.register.attributes = {
  name: 'nhs edit event'
}
