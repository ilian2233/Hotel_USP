using Domain;
using MediatR;
using Persistance;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Reservations
{
    public class Create
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
            public virtual int? CustomerId { get; set; }

            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
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
                var reservation = new Reservation
                {
                    Id = request.Id,
                    CustomerId = request.CustomerId,
                    StartDate = request.StartDate,
                    EndDate = request.EndDate
                };

                _context.Reservations.Add(reservation);

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
