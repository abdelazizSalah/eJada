using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tasks
{
    public class SensorMeasurement
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Temperature { get; set; }
    }

    public static class SensorMeasurementRepository
    {
        private static List<SensorMeasurement> _list = new List<SensorMeasurement>();

        static SensorMeasurementRepository()
        {
            _list.Add(new SensorMeasurement { Id = new Guid("B5716C51-9EFA-4FCF-A6D8-51C5A185E095"), Name = "M-00001", Temperature = 25 });
            _list.Add(new SensorMeasurement { Id = new Guid("01AFA424-C781-4A39-853D-66C6C29F0919"), Name = "M-00002", Temperature = 32 });
            _list.Add(new SensorMeasurement { Id = new Guid("7DE943D0-0C31-4840-AD1A-80D2AF7EFE65"), Name = "M-00003", Temperature = 21 });
            _list.Add(new SensorMeasurement { Id = new Guid("BFCFC733-508F-4B74-A424-343AC1CB2BE1"), Name = "M-00004", Temperature = 24 });
            _list.Add(new SensorMeasurement { Id = new Guid("5EBA2414-9A5D-4163-82AF-A2E07896715E"), Name = "M-00005", Temperature = 19 });
            _list.Add(new SensorMeasurement { Id = new Guid("58A2A025-A648-4CFB-BE15-DF89B72850BE"), Name = "M-00006", Temperature = 29 });
            _list.Add(new SensorMeasurement { Id = new Guid("BD7F2C36-1523-4E46-A1E4-BF206588DAD5"), Name = "M-00007", Temperature = 23 });
            _list.Add(new SensorMeasurement { Id = new Guid("12A22D27-4F43-4FAA-99F7-110546727A62"), Name = "M-00008", Temperature = 27 });
            _list.Add(new SensorMeasurement { Id = new Guid("84EEBD84-4089-43B3-AD6A-5D4571E08681"), Name = "M-00009", Temperature = 35 });
            _list.Add(new SensorMeasurement { Id = new Guid("33CEC506-E3B7-4348-B121-956F8BBB61F3"), Name = "M-00010", Temperature = 31 });
        }

        public static List<SensorMeasurement> GetAll()
        {
            return _list;
        }

        public static SensorMeasurement Get(Guid id)
        {
            return _list.FirstOrDefault(x => x.Id == id);
        }
    }

    public class CustomConnectorRetrieve : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

            // Fetch data from another source
            var item = SensorMeasurementRepository.Get(context.PrimaryEntityId);

            // Map 3rd party data to entity model
            Entity entity = new Entity(context.PrimaryEntityName);
            entity["new_name"] = item.Name;
            entity["new_temperature"] = item.Temperature;

            // Set output parameter
            context.OutputParameters["BusinessEntity"] = entity;
        }
    }


    public class CustomConnectorRetrieveMultiple : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

            // Fetch data from another source
            var list = SensorMeasurementRepository.GetAll();

            // Map 3rd party data to entity model
            EntityCollection ec = new EntityCollection();
            foreach (var item in list)
            {
                Entity entity = new Entity("new_virtualentity");
                entity["new_virtualentityid"] = item.Id;
                entity["new_temperature"] = item.Temperature;
                entity["new_name"] = item.Name;
                ec.Entities.AddRange(entity);
            }

            // Set output parameter
            context.OutputParameters["BusinessEntityCollection"] = ec;
        }
    }

}
