require "sinatra"
require "jekyll"

require "liquid"
require "safe_yaml/load"
require "kramdown"
require "colorator"
require "pry"

#Local Config
require './config.rb';

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
  if replaceLayout
    if replaceLayout["from"] and replaceLayout["to"]
      site.layouts[replaceLayout["from"]] = site.layouts[replaceLayout["to"]]
    end
  elsif $replaceLayoutFrom and $replaceLayoutTo
    site.layouts[$replaceLayoutFrom] = site.layouts[$replaceLayoutTo]
  end

  # Get collection info.
  collection = site.collections["_" + doc["type"]]
  if collection.nil?
     collection = site.collections["posts"] # Posts as alternative collection.
  end 


  #Generate the doc for rendering
  pageDocument = Jekyll::Document.new(root_dir + doc["path"] \
                                 , :site => site, :collection => collection)

  #Formulate data with given attributes and content
  pageDocument.merge_data!(doc["data"]["attributes"])
  pageDocument.content = doc["data"]["body"]

  result = Jekyll::Renderer.new(site, pageDocument, payload).run

  #Inject external stylesheets
  styles = '';
  for $href in $cssInjector
    styles = styles + '<link type="text/css" rel="stylesheet" media="all" href="' + $href +'">'
  end
  result = styles + result;

  result

end
