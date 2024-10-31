import Device from "./Device";

const devices = [
  {
    url: "/iphone-14-pro-max-silver.jpeg",
    name: "Iphone 14 Pro Max",
    description: "Apple iphone 14 Pro 512GB Gold ( MQ233 )",
  },
  {
    url: "/iphone-14-pro-max-silver.jpeg",
    name: "Iphone 14 Pro Max",
    description: "Apple iphone 14 Pro 512GB Gold ( MQ233 )",
  },
  {
    url: "/iphone-14-pro-max-silver.jpeg",
    name: "Iphone 14 Pro Max",
    description: "Apple iphone 14 Pro 512GB Gold ( MQ233 )",
  },
  {
    url: "/iphone-14-pro-max-silver.jpeg",
    name: "Iphone 14 Pro Max",
    description: "Apple iphone 14 Pro 512GB Gold ( MQ233 )",
  }
];
const ListOfDevices = () => {
  return <>
    <div className="flex justify-center items-center  gap-4">
  {devices.map((device)=>(
    <Device url={device.url} name={device.name}  description={device.description}/>
))}
</div>
</>;
};
export default ListOfDevices;
