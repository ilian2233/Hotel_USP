using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Reservation
    {
        public int Id { get; set; }
        public ICollection<Room> Rooms{ get; set; }
        public virtual int? CustomerId { get; set; }
        public virtual Customer Customer { get; set; }

        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

    }
}
