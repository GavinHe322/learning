
// tls 模块是对安全传输层 (TLS) 及安全套接层 (SSL)协议的实现，建立在 OpenSSL 的基础上

// TLS/SSL 是公共/私人的密钥基础设施(PKI)。
// 大部分情况下，每个服务器和客户端都应该只有一个私钥

// 用 OpenSSL 生成一个 2048位的 RSA 私钥
// openssl genrsa -out ryans-key.pem 2048

// 用 OpenSSL 生成一个私钥的 CSR 文件
// openssl req -new -sha256 -key ryans-key.pem -out ryans-csr.pem


// 用 OpenSSL 生成一个自签名证书的命令如下
// openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem


// 证书生成后，她又能用来生成一个 .pfx 或者 .p12 文件

// 命令行参数
/**
 * in
 *   被签名的证书
 * inkey
 *   有关的私钥
 * certfile
 *   嵌入文件的证书串，比如 cat ca1-cert.pem ca2-cert.pem > ca-cert.pem
 */
