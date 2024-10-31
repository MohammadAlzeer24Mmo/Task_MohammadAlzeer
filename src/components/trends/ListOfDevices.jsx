import Device from "./Device";

const devices = [
  {
    id:1,
    url: "/iphone-14-pro-max-silver.jpeg",
    name: "Iphone 14 Pro Max",
    description: "Apple iphone 14 Pro 512GB Gold ( MQ233 )",
  },
  {
    id:2,
    url: "/iphone-14-pro-max-silver.jpeg",
    name: "Iphone 14 Pro Max",
    description: "Apple iphone 14 Pro 512GB Gold ( MQ233 )",
  },
  {
    id:3,
    url: "/iphone-14-pro-max-silver.jpeg",
    name: "Iphone 14 Pro Max",
    description: "Apple iphone 14 Pro 512GB Gold ( MQ233 )",
  },
  {
    id:4,
    url: "/iphone-14-pro-max-silver.jpeg",
    name: "Iphone 14 Pro Max",
    description: "Apple iphone 14 Pro 512GB Gold ( MQ233 )",
  }
];
const ListOfDevices = () => {
  return <>
    <div className="flex items-center justify-center gap-4">
  {devices.map((device)=>(
    <Device key={device.id} url={device.url} name={device.name}  description={device.description}/>
))}
</div>
</>;
};
export default ListOfDevices;
