using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistance
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            List<Room> rooms = new List<Room>
                {
                    new Room
                    {
                        IsBusy = true,
                        ReservationId=1
                    },
                    new Room
                    {
                        IsBusy = true,
                        ReservationId=0

                    },
                    new Room
                    {
                        IsBusy = true,
                        ReservationId=2
                    }
                };
            if (!context.Rooms.Any())
            {
                await context.Rooms.AddRangeAsync(rooms);
            }

            List<Customer> customers = new List<Customer>
                {
                    new Customer
                    {
                        FirstName = "Paphnoutios",
                        LastName="Gosia"
                    },
                    new Customer
                    {
                        FirstName = "Jory",
                        LastName="Sophia"
                    },
                    new Customer
                    {
                        FirstName = "Cason",
                        LastName="Narayana"
                    }
                };
            if (!context.Customers.Any())
            {
                await context.Customers.AddRangeAsync(customers);
            }


            if (!context.Reservations.Any())
            {
                var reservations = new List<Reservation>
                {
                    new Reservation
                    {
                        CustomerId=customers.ElementAt(0).Id,
                        Customer = customers.ElementAt(0),
                        StartDate = DateTime.Now,
                        EndDate = DateTime.Now.AddDays(14)
                    },
                    new Reservation
                    {
                        CustomerId=customers.ElementAt(1).Id,
                        Customer = customers.ElementAt(1),
                        StartDate = DateTime.Now,
                        EndDate = DateTime.Now.AddDays(3)
                    },
                    new Reservation
                    {
                        CustomerId=customers.ElementAt(2).Id,
                        Customer = customers.ElementAt(2),
                        StartDate = DateTime.Now,
                        EndDate = DateTime.Now.AddDays(4)
                    },
                };

                await context.Reservations.AddRangeAsync(reservations);
            }
            await context.SaveChangesAsync();

        }
    }
}
