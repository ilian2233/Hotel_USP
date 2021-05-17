using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Rooms
{
    public class List
    {
        public class Query : IRequest<List<Room>> { }

        public class Handler : IRequestHandler<Query, List<Room>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Room>> Handle(Query request, CancellationToken cancellationToken)
            {
                var rooms = await _context.Rooms.ToListAsync(cancellationToken);
                return rooms;
            }
        }

    }

}
