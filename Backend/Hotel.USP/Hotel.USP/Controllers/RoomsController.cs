using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using System.Threading;
using Application.Rooms;

namespace Hotel.USP.Controllers
{
    public class RoomsController : BaseApiController
    {
        private readonly IMediator _mediator;
        public RoomsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Room>>> List(CancellationToken cancellationToken)
        {
            return await _mediator.Send(new List.Query(), cancellationToken);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<Room>> Details(int id)
        {
            return await _mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command query)
        {
            return await _mediator.Send(query);
        }

    }
}
