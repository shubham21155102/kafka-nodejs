## Installation(Docker PreInitialised)

```
docker run -p 2181:2181 zookeeper
```

```
docker run -p 9092:9092 \
  -e KAFKA_ZOOKEEPER_CONNECT=<MYIP>:2181 \
  -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<MYIP>:9092 \
  -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
  confluentinc/cp-kafka
```
