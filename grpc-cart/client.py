import grpc, cart_pb2, cart_pb2_grpc
ch = grpc.insecure_channel('localhost:50051')
stub = cart_pb2_grpc.CartServiceStub(ch)
resp = stub.ViewCart(cart_pb2.Empty())
print(resp.items)