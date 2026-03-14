import pika
def on_msg(ch, method, props, body):
    print("Event:", body.decode())
conn = pika.BlockingConnection(pika.ConnectionParameters('rabbitmq'))
ch = conn.channel()
ch.queue_declare(queue='events', durable=True)
ch.basic_consume(queue='events', on_message_callback=on_msg, auto_ack=True)
print("Waiting for events...")
ch.start_consuming()
