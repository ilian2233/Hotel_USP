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
    public class Create
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
            public bool IsBusy { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var room = new Room
                {
                    Id = request.Id,
                    IsBusy = request.IsBusy
                };

                _context.Rooms.Add(room);

                // If the save is successful, it returns the number of changes
                var success = await _context.SaveChangesAsync() > 0;

                if (success)
                {
                    return Unit.Value;
                }

                throw new Exception("Problem saving changes.");
            }
        }
    }
}
