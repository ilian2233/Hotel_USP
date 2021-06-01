using Domain;
using MediatR;
using Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Reservations
{

    public class Details
    {
        public class Query : IRequest<Reservation>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Reservation>
        {

            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            async Task<Reservation> IRequestHandler<Query, Reservation>.Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Reservations.FindAsync(request.Id);
            }

        }
    }
}
