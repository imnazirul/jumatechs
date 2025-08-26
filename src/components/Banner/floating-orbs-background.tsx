"use client";

export default function FloatingOrbsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden md:hidden">
      {/* Background Gradient */}
      <div className="absolute " />

      {/* Floating Glow Orb 1 */}
      <div
        className="absolute top-0 left-0 w-72 h-64 bg-blue-700 blur-3xl  animate-pulse"
        style={{
          animation:
            "float1 6s ease-in-out infinite, pulse 4s ease-in-out infinite",
        }}
      />

      {/* Floating Glow Orb 2 */}
      <div
        className="absolute bottom-20 right-20 w-48 h-48 bg-blue-700 rounded-full blur-3xl animate-bounce"
        style={{
          animation:
            "float2 8s ease-in-out infinite, pulse 3s ease-in-out infinite",
        }}
      />

      {/* Custom keyframes defined inline */}
      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-15px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(15px) translateX(-10px);
          }
          66% {
            transform: translateY(-25px) translateX(20px);
          }
        }
      `}</style>
    </div>
  );
}
