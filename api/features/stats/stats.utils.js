import smsModal from "./sms.modal";

const getRoute = (req) => {
  const route = req.route ? req.route.path : ""; // check if the handler exist
  console.log(route);

  const baseUrl = req.baseUrl ? req.baseUrl : ""; // adding the base url if the handler is child of other handler
  return route ? `${baseUrl === "/" ? "" : baseUrl}${route}` : "unknown route";
};

let visits = async function (req, res, next) {
  console.log(req.user);

  // try {
  //   await smsModal.findOneAndUpdate(
  //     { _id: '60be5bdb4fc5384d2fa6ff90' },
  //     { $inc: { 'ts': 0.5  } },
  //     { new: true },
  //     (err, response) => {
  //       if(err) return err
  //     }
    
  //   );
  // } catch (error) {
  //   console.log(error);
  // }

  res.on("finish", () => {
    const stats = { "GET /sms/ 200": 1 };
    
    const event = `${req.method} ${getRoute(req)} ${res.statusCode}`;
    console.log(event);
    stats[event] = stats[event] ? stats[event] + 1 : 1;
    
    console.log(stats);
  });
  next();
};



export default visits;
