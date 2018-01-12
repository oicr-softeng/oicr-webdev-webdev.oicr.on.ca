require "sinatra"
require "jekyll"

require "liquid"
require "safe_yaml/load"
require "kramdown"
require "colorator"
require "pry"

# Request response for OPTIONS
options '/' do
  response.headers["Access-Control-Allow-Origin"] = "*"
  response.headers["Access-Control-Allow-Methods"] = "POST"
  response.headers["Access-Control-Allow-Headers"] = "Content-Type"
  halt 200
end

#Config

root_dir = __dir__ + '/../'
config = {"serving" => false, "source" => root_dir, "layouts_dir" => root_dir + '_layouts', \
    "plugins_dir" => root_dir + '_plugins'}

#Generate the site object

options = Jekyll.configuration(config)

#Generate Site object
site = Jekyll::Site.new(options)
site.reset
site.read

payload = Jekyll::Drops::UnifiedPayloadDrop.new site

# Request response for POST
post('/') do
  response.headers["Access-Control-Allow-Origin"] = "*"
  response.headers["Access-Control-Allow-Methods"] = "POST"
  
  #Get request data
  data = JSON.parse(request.body.read)
  doc = data["doc"]
  replaceLayout = data["replaceLayout"]

  #Manipulate layout object.
  site.layouts[replaceLayout["from"]] = site.layouts[replaceLayout["to"]]

  #Generate the doc for rendering
  pageDocument = Jekyll::Document.new(root_dir + doc["path"] \
                                  , :site => site, :collection => site.collections["_" + doc["type"]])
  
  #Formulate data with given attributes and content
  pageDocument.merge_data!(doc["data"]["attributes"])
  pageDocument.content = doc["data"]["body"] 

  result = Jekyll::Renderer.new(site, pageDocument, payload).run

  result
end
