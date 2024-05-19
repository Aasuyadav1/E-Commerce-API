import Order from "../Model/orderModel.js";

const getOrderDetail = async (req, res) => {
    try {
        const isAdmin = req.user.isAdmin;

        if(!isAdmin){
            return res.status(401).json({
                message: "Unauthorized access"
            })
        }

        const orders = await Order.find().populate("product userId");

        if(!orders){
            return res.status(404).json({
                message: "Orders not found"
            })
        }

        return res.status(200).json({
            message: "Orders fetched successfully",
            orders
        })

    } catch (error) {
        console.log(error)
    }
} 

const updateOrderStatus = async (req, res) => {
    try {
       const isAdmin = req.user.isAdmin
       
       if(!isAdmin){
        return res.status(401).json({
            message: "Unauthorized access"
        })        
        }

        const id = req.params.id 
        const {status} = req.body

        const order = await Order.findById(id);

        if(!order){
            return res.status(400).json({
                message: "no product found"
            })
        }

        order.status = status

        await order.save()

        return res.status(200).json({
            message: "order updated successfully",
        })
    } catch (error) {
        console.log(error)
    }
}

const getOrderByStatus = async (req, res) => {
    try {
        const isAdmin = req.user.isAdmin 

        if(!isAdmin){
            return res.status(401).json({
                message: "Unauthorized access"
            })
        }

        const status = req.params.status

        const order = await Order.find({status})

        if(!order){
            return res.status(404).json({
                message: "Order not found"
            })
        }

        return res.status(200).json({
            message: "product fetched successful",
            order
        })

    } catch (error) {
        console.log(error)
    }
}



export { getOrderByStatus, updateOrderStatus, getOrderDetail }