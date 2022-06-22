// GENERATED CODE -- DO NOT EDIT!

// package: helloworld
// file: proto/helloworld.proto

import * as proto_helloworld_pb from "../proto/helloworld_pb";
import * as grpc from "@grpc/grpc-js";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sayHello: grpc.MethodDefinition<proto_helloworld_pb.HelloRequest, proto_helloworld_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer extends grpc.UntypedServiceImplementation {
  sayHello: grpc.handleUnaryCall<proto_helloworld_pb.HelloRequest, proto_helloworld_pb.HelloReply>;
}

export class GreeterClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sayHello(argument: proto_helloworld_pb.HelloRequest, callback: grpc.requestCallback<proto_helloworld_pb.HelloReply>): grpc.ClientUnaryCall;
  sayHello(argument: proto_helloworld_pb.HelloRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_helloworld_pb.HelloReply>): grpc.ClientUnaryCall;
  sayHello(argument: proto_helloworld_pb.HelloRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_helloworld_pb.HelloReply>): grpc.ClientUnaryCall;
}
