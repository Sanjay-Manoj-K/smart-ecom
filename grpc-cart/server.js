const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const def = protoLoader.loadSync('cart.proto');
const cart = grpc.loadPackageDefinition(def).cart;

let items = ['keyboard', 'mouse'];

function ViewCart(call, cb) { cb(null, { items }); }

const server = new grpc.Server();
server.addService(cart.CartService.service, { ViewCart });
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => server.start());
console.log('gRPC Cart on 50051');