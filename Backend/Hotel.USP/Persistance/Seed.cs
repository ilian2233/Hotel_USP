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
            if (!context.Rooms.Any())
            {
                var rooms = new List<Room>
                {
                    new Room
                    {
                        IsBusy = true,
                    },
                    new Room
                    {
                        IsBusy = true,
                    },
                    new Room
                    {
                        IsBusy = true,
                    }
                };

                await context.Rooms.AddRangeAsync(rooms);
            }
          
            await context.SaveChangesAsync();

        }
    }
}
