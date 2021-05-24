using Domain;
using MediatR;
using Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Rooms
{

    public class Details
    {
        public class Query : IRequest<Room>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Room>
        {

            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            async Task<Room> IRequestHandler<Query, Room>.Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Rooms.FindAsync(request.Id);
            }

        }
    }
}
