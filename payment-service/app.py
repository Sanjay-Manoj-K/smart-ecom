from flask import Flask, request, jsonify

app = Flask(__name__)

@app.post('/pay')
def pay():
    data = request.get_json(force=True)

    amount = data.get('amount', 0)
    method = data.get('method', 'card')
    code = data.get('code', '')

    discount_rate = 0

    # Apply discount if code is NEWYEAR
    if code == "NEWYEAR":
        discount_rate = 0.2   # 20% discount

    discount = amount * discount_rate
    final_amount = amount - discount

    return jsonify({
        "status": "ok",
        "method": method,
        "original_amount": amount,
        "discount": discount,
        "final_amount": final_amount
    })

app.run(host='0.0.0.0', port=3002)