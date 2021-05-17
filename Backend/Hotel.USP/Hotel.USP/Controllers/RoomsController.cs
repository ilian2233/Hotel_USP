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
    [ApiController]
    [Route("[controller]")]
    public class RoomsController : ControllerBase
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
    }
}
