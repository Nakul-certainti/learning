from kafka import KafkaProducer

producer = KafkaProducer(bootstrap_servers="localhost:9092")
producer.send("my-topic", b"Hello, Kafka!")
producer.flush()

print("Message sent to Kafka topic 'my-topic'")
