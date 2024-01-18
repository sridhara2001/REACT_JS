const users = [
      {
            id: 1,
            name: "Ramu",
            email: "ramu@gmail.com",
            age: 24,
            address: {
                  city: "Benagluru",
                  pin: "560056",
            },
            bank: [
                  {
                        accNo: 1234,
                        bName: "SBI",
                        type: "Savings",
                  },
                  {
                        accNo: 4344,
                        bName: "HDFC",
                        type: "Current",  
                  },
            ],
      },
      {
            id: 2,
            name: "Likhith",
            email: "likhith@gmail.com",
            age: 24,
            address: {
                  city: "Bengaluru",
                  pin: "560036"
            },
            bank: [
                  {
                        accNo: 6833,
                        bName: "ICC",
                        type: "Current",
                  },
                  {
                        accNo: 7882,
                        bName: "Kotak",
                        type: "Savings",
                  }
            ]
      }
];

export default users