using Application.Reservations;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Hotel.USP.Controllers
{
    public class ReservationsController : BaseApiController
    {
        private readonly IMediator _mediator;
        public ReservationsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Reservation>>> List(CancellationToken cancellationToken)
        {
            return await _mediator.Send(new List.Query(), cancellationToken);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<Reservation>> Details(int id)
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
