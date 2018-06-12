
input_lines = gets.split(" ").map(&:to_i)
if input_lines[0] == input_lines[1] then
  puts "eq"
else
  puts input_lines.max
end
