from flask import Flask, render_template
from models import db, Usuario, Producto, Compra, Venta, Insumo

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/usuario')
def mostrar_usuario():
    usuario = {
        'nombre': 'Juan Pérez',
        'email': 'juan@example.com',
        'rol': 'Administrador'
    }
    return render_template('user.html', 
        nombre_usuario=usuario['nombre'], 
        email_usuario=usuario['email'], 
        rol_usuario=usuario['rol'])

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/contabilidad')
def contabilidad():
    ventas = Venta.query.all()
    compras = Compra.query.all()
    return render_template('accounting.html', ventas=ventas, compras=compras)

@app.route('/insumos')
def insumos():
    insumos = Insumo.query.all()
    return render_template('supplies.html', insumos=insumos)

@app.route('/ventas')
def ventas():
    ventas = Venta.query.all()
    return render_template('sales.html', ventas=ventas)

@app.route('/compras')
def compras():
    compras = Compra.query.all()
    return render_template('purchases.html', compras=compras)

@app.route('/manual')
def manual():
    return render_template('manual.html')

@app.route('/derechos')
def derechos():
    return render_template('copyright.html')

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('main.html')

if __name__ == '__main__':
    app.run(debug=True)